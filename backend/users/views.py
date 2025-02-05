from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from .models import Mentor
from .serializers import MentorSerializer
from .filters import MentorFilter
from rest_framework.pagination import PageNumberPagination
from rest_framework import status


class MentorPagination(PageNumberPagination):
    page_size = 5  # Load 5 mentors per request
    page_size_query_param = "page_size"
    max_page_size = 20  # Prevent excessive data requests


class MentorListView(generics.ListAPIView):
    serializer_class = MentorSerializer
    queryset = Mentor.objects.all()
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_class = MentorFilter

    search_fields = ["user__first_name", "user__last_name", "country"]


@api_view(["POST"])
def filter_mentors(request):
    """
    Allows filtering mentors via JSON in a POST request.
    """
    mentors = Mentor.objects.all()

    country = request.data.get("country")
    min_experience = request.data.get("min_experience")
    max_experience = request.data.get("max_experience")
    industries = request.data.get("industries")
    education = request.data.get("education")
    approaches = request.data.get("approaches")
    offers = request.data.get("offers")

    if country:
        mentors = mentors.filter(country=country)
    if min_experience:
        mentors = mentors.filter(years_of_experience__gte=min_experience)
    if max_experience:
        mentors = mentors.filter(years_of_experience__lte=max_experience)
    if industries:
        mentors = mentors.filter(industries__name__in=industries)
    if education:
        mentors = mentors.filter(education__name__in=education)
    if approaches:
        mentors = mentors.filter(approaches__name__in=approaches)
    if offers:
        mentors = mentors.filter(offers__name__in=offers)

    # 🔥 Fix: Remove duplicate rows caused by many-to-many joins
    mentors = mentors.distinct()

    # Apply Pagination
    paginator = MentorPagination()
    paginated_mentors = paginator.paginate_queryset(mentors, request)

    # Ensure pagination is used
    if paginated_mentors is not None:
        serializer = MentorSerializer(paginated_mentors, many=True)
        return paginator.get_paginated_response(serializer.data)

    # If pagination is not used, return full result (should not happen if paginator is working)
    serializer = MentorSerializer(mentors, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_mentor_by_id(request, mentor_id):
    """
    Retrieve a mentor by their ID.
    """
    try:
        mentor = Mentor.objects.get(id=mentor_id)  # Fetch mentor by ID
        serializer = MentorSerializer(mentor)  # Serialize mentor data
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Mentor.DoesNotExist:
        return Response({"error": "Mentor not found"}, status=status.HTTP_404_NOT_FOUND)
