"""
URL configuration for api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from projects import views

router = routers.DefaultRouter()
router.register(r'projects', views.ProjectView, 'project')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls), name='project_list'),
]
