from django.db import models
from django.utils import timezone
from user_management import models as user_management_models
from django.core.exceptions import ValidationError
from django.conf import settings

# Create your models here.

class EventModel(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    location = models.CharField(max_length=255)
    organizer = models.ForeignKey(user_management_models.UserModel, on_delete=models.CASCADE, related_name='events')
    capacity = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='event_images/', null=True, blank=True)

    def __str__(self):
        return self.name


REGULAR = 'Regular'
VIP = 'VIP'
EARLY_BIRD = 'Early Bird'
    
TICKET_TYPE_CHOICES = [
    (REGULAR, 'Regular'),
    (VIP, 'VIP'),
    (EARLY_BIRD, 'Early Bird'),
]

class TicketModel(models.Model):
    event = models.ForeignKey(EventModel, on_delete=models.CASCADE, related_name='ticket')
    ticket_type = models.CharField(choices=TICKET_TYPE_CHOICES,max_length=10)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    available_capacity = models.PositiveIntegerField() #add ths ifield automatically while saving the to db

    def __str__(self):
        return f"{self.ticket_type} - {self.event.name}"

class RegistrationModel(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,)
    event = models.ForeignKey(EventModel, on_delete=models.CASCADE)
    ticket = models.ForeignKey(TicketModel, on_delete=models.CASCADE)
    booked_tickets = models.IntegerField(blank=False,default=0)
    registration_date = models.DateTimeField(auto_now_add=True)
    is_attended = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - {self.event.name}"
    




    





    '''
    class Notification(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='notifications')
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"Notification for {self.user.username} - {self.event.name}"
    '''



    '''
    class Review(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review by {self.user.username} for {self.event.name}"
    '''


    '''
    class DiscountCode(models.Model):
    code = models.CharField(max_length=50, unique=True)  # The discount code itself
    discount_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # Fixed amount off
    discount_percentage = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)  # Percentage off
    valid_from = models.DateTimeField()
    valid_to = models.DateTimeField()
    max_uses = models.PositiveIntegerField(default=1)  # Total number of times this code can be used
    uses_left = models.PositiveIntegerField(default=1)  # Number of uses left
    event = models.ForeignKey('Event', null=True, blank=True, on_delete=models.CASCADE, related_name='discount_codes')  # Optional: Apply to a specific event
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.code

    def is_valid(self):
        now = timezone.now()
        return (self.valid_from <= now <= self.valid_to) and (self.uses_left > 0)

    def use_code(self):
        if self.is_valid():
            self.uses_left -= 1
            self.save()
            return True
        return False
    '''


    '''
    def apply_discount_code(request):
    code = request.GET.get('code')
    discount_code = get_object_or_404(DiscountCode, code=code)
    
    if discount_code.is_valid():
        discount_amount = discount_code.discount_amount or 0
        discount_percentage = discount_code.discount_percentage or 0

        # Assuming you have a TicketType model and calculating the discount
        ticket_type_id = request.GET.get('ticket_type_id')
        ticket_type = get_object_or_404(TicketType, id=ticket_type_id)

        discounted_price = ticket_type.price - discount_amount
        discounted_price = discounted_price * (1 - discount_percentage / 100)

        discount_code.use_code()  # Update uses left

        return JsonResponse({'discounted_price': discounted_price})
    else:
        return JsonResponse({'error': 'Invalid or expired discount code'}, status=400)
    '''