from django.shortcuts import render, get_object_or_404
from apps.base.models import Index


def index(request, slug=None):
    if slug:
        index = get_object_or_404(Index, slug=slug)
    else:
        index = Index.objects.latest('id')

    return render(request, "base/index.html", locals())


def quiz(request):
    return render(request, "base/quiz.html", locals())


def errors(request, exception):
    return render(request, "404/404.html", status=404)