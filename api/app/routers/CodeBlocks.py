from fastapi import APIRouter, Response, status
from app.schemas.CodeSchema import CodeStart
from ..services.userProgram.runUserCode import runUserCode

router = APIRouter(prefix="/api/code")


@router.post("/run", status_code=200)
async def run_code(request: CodeStart, response: Response):
    try:
        result = runUserCode(request)
        return result
    except Exception as error:
        print(error)
