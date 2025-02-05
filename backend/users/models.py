from django.db import models

# AbstractBaseUser provides the foundation for user authentication.
# PermissionsMixin adds permissions and group functionality, enabling you to build a fully functional user system.
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager


# Create your models here.
class User(AbstractBaseUser, PermissionsMixin):
    ROLE_CHOICES = [
        ("mentor", "Mentor"),
        ("mentee", "Mentee"),
    ]

    first_name = models.CharField(_("First Name"), max_length=100)
    last_name = models.CharField(_("Last Name"), max_length=100)
    email = models.EmailField(_("Email Address"), max_length=254, unique=True)
    role = models.CharField(
        max_length=10, choices=ROLE_CHOICES, default=ROLE_CHOICES[1][0]
    )
    profile_picture = models.ImageField(
        upload_to="profile_pics/", blank=True, null=True
    )
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    objects = CustomUserManager()

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")

    def __str__(self):
        return self.email

    @property  # Allows me to access the method like an attribute
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"


class Mentee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="mentee")
    payment_plan = models.CharField(
        max_length=50,
        choices=[("free", "Free"), ("basic", "Basic"), ("premium", "Premium")],
    )

    def __str__(self):
        return f"Mentee: {self.user.get_full_name()}"


class Industry(models.Model):
    name = models.CharField(max_length=100, db_index=True, default="General")

    class Meta:
        verbose_name = _("Industry")
        verbose_name_plural = _("Industries")

    def __str__(self):
        return self.name


class Education(models.Model):
    name = models.CharField(max_length=100, db_index=True, default="General")

    def __str__(self):
        return self.name


class Approach(models.Model):
    name = models.CharField(max_length=100, db_index=True, default="General")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _("Approach")
        verbose_name_plural = _("Approaches")

    def __str__(self):
        return self.name


class Offer(models.Model):
    name = models.CharField(max_length=100, db_index=True, default="General")

    def __str__(self):
        return self.name


class Mentor(models.Model):
    COUNTRIES = [
        ("United States", "United States"),
        ("Canada", "Canada"),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="mentor")
    country = models.CharField(max_length=100, choices=COUNTRIES, default="Canada")
    industries = models.ManyToManyField(Industry, related_name="mentors")
    education = models.ManyToManyField(Education, related_name="mentors")
    offers = models.ManyToManyField(Offer, related_name="mentors")
    approaches = models.ManyToManyField(Approach, related_name="mentors")
    bio = models.TextField()
    years_of_experience = models.IntegerField(db_index=True)
    job_title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    asap_availability = models.BooleanField(default=False)

    def __str__(self):
        return f"Mentor: {self.user.get_full_name}"
