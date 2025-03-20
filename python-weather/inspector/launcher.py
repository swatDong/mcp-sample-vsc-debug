import subprocess
import sys
command = sys.argv[1]
target = sys.argv[2]
print(f"Launching process: {command} {target}")
cmd = subprocess.Popen(
    args=[command, target],
    stdout=sys.stdout,
    stderr=sys.stderr,
    stdin=sys.stdin,
)
cmd.wait()
