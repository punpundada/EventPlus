from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
from . import views

urlpatterns=[
    path("auth/token/",TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path("user/register/", view=views.CreateUserView.as_view(),name="create_user_view"),
    path("user/<int:pk>/",view=views.UserDetailsView.as_view(),name="user_details_view"),
    path("user/<int:pk>/promote/",view=views.UserPromoteView.as_view(),name="user_promote_view"),
]