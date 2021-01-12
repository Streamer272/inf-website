import os
import threading


def run(react_run_path: str) -> None:
    os.chdir(react_run_path)
    os.system("yarn start")


paths = [
    "/mnt/38a90096-bca6-47f2-b23a-3885f42bfa67/Desktop/Coding/HTML/inf-website/master",
    "/mnt/38a90096-bca6-47f2-b23a-3885f42bfa67/Desktop/Coding/HTML/inf-website/contacts",
    "/mnt/38a90096-bca6-47f2-b23a-3885f42bfa67/Desktop/Coding/HTML/inf-website/courses"
]

for path in paths:
    run_thread = threading.Thread(target=run, args=[path])
    run_thread.start()
