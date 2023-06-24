import time
import os
import requests


def runUserCode(request):
    code = request.code
    file_type = request.codeLanguage

    file_name = int(round(time.time()))

    try:
        with open(f"./sharedFiles/{file_name}{file_type}", "w") as file:
            file.write(code)
            file.close()

    except Exception as error:
        os.unlink(f"./sharedFiles/{file_name}{file_type}")

    compilationResult = requests.post(
        "http://ubuntu:8090/code/run",
        data={"fileName": file_name, "fileType": file_type},
    )

    os.unlink(f"./sharedFiles/{file_name}{file_type}")

    return compilationResult.json()
