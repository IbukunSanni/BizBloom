from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import User, Mentor, Mentee, Industry, Education, Approach, Offer

# Register your models here.


class UserAdmin(BaseUserAdmin):
    # Sorted by email
    ordering = ["email"]
    # Specifies the form used when adding a new user
    add_form = CustomUserCreationForm
    # Specifies the form used when editing an existing user
    form = CustomUserChangeForm
    # Indicates the model being managed
    model = User

    list_display = ["email", "first_name", "last_name", "is_staff", "is_active"]
    list_display_links = ["email"]
    list_filter = ["email", "first_name", "last_name", "is_staff", "is_active"]
    search_fields = ["email", "first_name", "last_name"]
    fieldsets = (
        (
            _("Login Credentials"),
            {
                "fields": (
                    "email",
                    "password",
                )
            },
        ),
        (
            _("Personal Information"),
            {
                "fields": (
                    "first_name",
                    "last_name",
                )
            },
        ),
        (
            _("Permissions and Groups"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        (
            _("Important Dates"),
            {"fields": ("last_login",)},
        ),
    )
    # Defines the layout of fields when adding a new user in the admin panel
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "email",
                    "first_name",
                    "last_name",
                    "password1",
                    "password2",
                    "is_staff",
                    "is_active",
                ),
            },
        ),
    )


# ✅ Mentor Admin
class MentorAdmin(admin.ModelAdmin):
    list_display = [
        "user",
        "country",
        "years_of_experience",
        "job_title",
        "company",
        "asap_availability",
    ]
    list_filter = ["country", "years_of_experience", "asap_availability"]
    search_fields = [
        "user__email",
        "user__first_name",
        "user__last_name",
        "job_title",
        "company",
    ]


# ✅ Mentee Admin
class MenteeAdmin(admin.ModelAdmin):
    list_display = ["user", "payment_plan"]
    list_filter = ["payment_plan"]
    search_fields = ["user__email", "user__first_name", "user__last_name"]


# ✅ Industry Admin
class IndustryAdmin(admin.ModelAdmin):
    list_display = ["name"]
    search_fields = ["name"]


# ✅ Education Admin
class EducationAdmin(admin.ModelAdmin):
    list_display = ["name"]
    search_fields = ["name"]


# ✅ Approach Admin
class ApproachAdmin(admin.ModelAdmin):
    list_display = ["name"]
    search_fields = ["name"]


# ✅ Offer Admin
class OfferAdmin(admin.ModelAdmin):
    list_display = ["name"]
    search_fields = ["name"]


# Register models


# Registers the custom UserAdmin class with the User model,
# replacing the default admin configuration for users.
admin.site.register(User, UserAdmin)
admin.site.register(Mentor, MentorAdmin)
admin.site.register(Mentee, MenteeAdmin)
admin.site.register(Industry, IndustryAdmin)
admin.site.register(Education, EducationAdmin)
admin.site.register(Approach, ApproachAdmin)
admin.site.register(Offer, OfferAdmin)
