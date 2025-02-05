from django.urls import path
from .views import MentorListView, filter_mentors, get_mentor_by_id
from . import views

urlpatterns = [
    path("mentors/", MentorListView.as_view(), name="mentor-list"),
    path(
        "mentors/filter/", filter_mentors, name="mentor-filter"
    ),  # ✅ New endpoint for JSON filtering
    path("mentors/<int:mentor_id>/", get_mentor_by_id, name="get_mentor_by_id"),
]
