from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from .models import Mentor, Industry, Education, Approach, Offer


User = get_user_model()


class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ["id", "email", "first_name", "last_name", "password", "role"]


class IndustrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Industry
        fields = ["name"]


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ["name"]


class ApproachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Approach
        fields = ["name"]


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ["name"]


class MentorSerializer(serializers.ModelSerializer):
    # id = serializers.PrimaryKeyRelatedField()
    first_name = serializers.CharField(source="user.first_name")
    last_name = serializers.CharField(source="user.last_name")
    email = serializers.EmailField(source="user.email")
    profile_picture = serializers.ImageField(source="user.profile_picture")

    industries = IndustrySerializer(many=True, read_only=True)
    education = EducationSerializer(many=True, read_only=True)
    approaches = ApproachSerializer(many=True, read_only=True)
    offers = OfferSerializer(many=True, read_only=True)
    asap_availability = serializers.BooleanField()
    years_of_experience = serializers.IntegerField()
    bio = serializers.CharField()
    job_title = serializers.CharField()
    company = serializers.CharField()

    class Meta:
        model = Mentor
        fields = [
            "id",
            "first_name",
            "last_name",
            "email",
            "profile_picture",
            "country",
            "industries",
            "education",
            "approaches",
            "offers",
            "asap_availability",
            "years_of_experience",
            "bio",
            "job_title",
            "company",
        ]
