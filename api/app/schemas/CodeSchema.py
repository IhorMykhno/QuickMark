from pydantic import BaseModel


class CodeStart(BaseModel):
    codeLanguage: str
    code: str
