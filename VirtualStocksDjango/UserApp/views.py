from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .stocksapi import *
# from UserApp.models import Users
# from UserApp.serializers import UserSerializer
from django.http import HttpResponse
# Create your views here.
def index(request):
    data=get_stock_by_name('INFY')
    return JsonResponse(data)

def stocks(request):
    data=get_stocks_list()
    return JsonResponse(data)

def gainers(request):
    data=get_gainers()
    return JsonResponse(data, safe=False)

def losers(request):
    data=get_gainers()
    return JsonResponse(data,safe=False)

@csrf_exempt
def userApi(request,id=0):
    if request.method == 'GET':
        users = Users.objects.all()
        users_serializer = UserSerializer(users,many=True)
        return JsonResponse(users_serializer.data, safe=False)

    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        users_serializer = UserSerializer(data = user_data)
        if users_serializer.is_valid():
            users_serializer.save()
            portfolio.add
            return JsonResponse("added successfully",safe=False)
        return JsonResponse("failed to add",safe=False)

    elif request.method=='PUT':
        user_data=JSONParser().parse(request)
        user=Users.objects.get(UserId=user_data['UserId'])
        user_serializer=UserSerializer(user,data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Updates Successfully!",safe=False)
        return JsonResponse("Failed to Update.",safe=False)
        
    elif request.method=="DELETE":
        user=Users.objects.get(UserId=id)
        user.delete()
        return JsonResponse("Deleted successfully",safe=False)
