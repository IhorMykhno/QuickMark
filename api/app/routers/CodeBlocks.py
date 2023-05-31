from fastapi import APIRouter
from app.schemas.CodeSchema import CodeStart
from ..services.userProgram.runUserCode import runUserCode

router = APIRouter(prefix="/api/code")


@router.post("/run")
async def run_code(request: CodeStart):
    try:
        result = await runUserCode(request)
        return {200: {"data": result}}
    except Exception as err:
        return {400: {"message": err}}
