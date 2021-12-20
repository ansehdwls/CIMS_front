output=""
output="${output}REACT_APP_PRODUCTION_URL=${PRODUCTION_URL}\n"
output="${output}REACT_APP_KAKAOAK=${KAKAOAK}\n"

echo $output > .env