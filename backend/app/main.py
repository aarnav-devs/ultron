from fastapi import FastAPI

app = FastAPI(
    title="ULTRON API",
    description="AI Model Training Platform.",
    version="1.0.0",
)

@app.get("/")
def root():
    return {
        "message": "Welcome to the ULTRON API. This is an AI Model Training Platform."
    }
    