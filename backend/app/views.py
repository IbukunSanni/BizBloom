from django.http import JsonResponse
from django.db import connection
from django.shortcuts import render
import logging

logger = logging.getLogger(__name__)


def test_db_connection(request):
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1;")
            result = cursor.fetchone()
        return JsonResponse({"success": True, "result": result})
    except Exception as e:
        logger.error(f"Database connection test failed: {str(e)}")
        return JsonResponse({"success": False, "error": str(e)})


def test_view(request):
    data = {"message": "Bizbloom in business yall!"}
    return JsonResponse(data)


def show_home(request):
    return render(request, "home.html")
