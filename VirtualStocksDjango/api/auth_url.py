from rest_framework.authtoken import views


def get_token():
    return views.obtain_auth_token
