import django_filters
from .models import Mentor


class MentorFilter(django_filters.FilterSet):
    # ✅ Filter by min/max experience range
    min_experience = django_filters.NumberFilter(
        field_name="years_of_experience", lookup_expr="gte"
    )
    max_experience = django_filters.NumberFilter(
        field_name="years_of_experience", lookup_expr="lte"
    )

    # ✅ Filter by country (Dropdown choice)
    country = django_filters.ChoiceFilter(
        field_name="country", choices=Mentor.COUNTRIES
    )

    # ✅ Filter by related ManyToMany fields (Supports multiple values)
    industries = django_filters.CharFilter(
        field_name="industries__name", lookup_expr="icontains"
    )
    education = django_filters.CharFilter(
        field_name="education__name", lookup_expr="icontains"
    )
    approaches = django_filters.CharFilter(
        field_name="approaches__description", lookup_expr="icontains"
    )
    offers = django_filters.CharFilter(
        field_name="offers__description", lookup_expr="icontains"
    )

    class Meta:
        model = Mentor
        fields = [
            "country",
            "min_experience",
            "max_experience",
            "industries",
            "education",
            "approaches",
            "offers",
        ]
