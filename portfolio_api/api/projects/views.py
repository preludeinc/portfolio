from django.shortcuts import render
from rest_framework import viewsets
from django_filters import rest_framework as filters
from .serializers import ProjectSerializer
from .models import Project

class ProjectFilter(filters.FilterSet):
    category_id = filters.NumberFilter(field_name='category', lookup_expr='exact')

    class Meta:
        model = Project
        fields = ['category_id']

# Create your views here.
class ProjectView(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ProjectFilter