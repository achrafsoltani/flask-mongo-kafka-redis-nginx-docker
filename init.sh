python3 -m venv api/.venv
# shellcheck disable=SC2164
cd api
. .venv/bin/activate
pip install -r requirements.txt

cd ..

python3 -m venv dashboard/.venv
# shellcheck disable=SC2164
cd dashboard
. .venv/bin/activate
pip install -r requirements.txt