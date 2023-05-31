import time
import os
from ...constants.code_languages import language_types


def runUserCode(request):
    code = request.code
    code_language = request.codeLanguage
    generate_file_name = int(round(time.time()))

    try:
        with open(
            f"./userCodeFiles/{generate_file_name}{language_types[code_language]}", "w"
        ) as file:
            file.write(code)
            file.close()

    except Exception(err):
        print(err)
