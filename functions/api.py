from django.http import JsonResponse

def handler(event, context):
    # Ваш код обработки запросов
    return JsonResponse({"message": "Hello from Django on Netlify!"})
