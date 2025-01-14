from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import User


# performing inheritance with UserCreationForm
class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User
        # These are the fields that would appear
        fields = ["email", "first_name", "last_name"]
        error_class = "error"


class CustomUserChangeForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        model = User
        # These are the fields that would be editable
        fields = ["email", "first_name", "last_name"]
        error_class = "error"
