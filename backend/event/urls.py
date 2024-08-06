from django.urls import path
from . import views
urlpatterns=[
    path("create/",view=views.EventCreateView.as_view(),name="create_event_view"),
    path("",view=views.EventListView.as_view(),name="list_event_view"),
]