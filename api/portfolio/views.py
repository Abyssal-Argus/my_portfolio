from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactSerializer
from .models import Contact

@api_view(['GET', 'POST'])  # Allow both GET and POST
def save_contact(request):
    if request.method == 'GET':  # Handle GET request to fetch messages
        contacts = Contact.objects.all()  # Retrieve all contact messages
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'POST':  # Handle form submission
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
