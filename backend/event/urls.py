from django.urls import path
from . import views
urlpatterns=[
    path("create/",view=views.EventCreateView.as_view(),name="create_event_view"),
    path("<int:id>/",view=views.EventByIdVIew.as_view(),name="get_by_id_event_view"),
    path("",view=views.EventListView.as_view(),name="list_event_view"),
    path("tickets/create/",view=views.TicketCreateView.as_view(),name="ticket_create_view"),
    path("tickets/<int:event_id>/",view=views.TicketCreateView.as_view(),name="ticket_create_view"),
    path("register/",view=views.RegistrationCreateView.as_view(),name="registration_create_view")
]