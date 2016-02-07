for D in `ls -d episodes/*/`
do
  ./scripts/build-episode.sh $D &
done

wait
echo "episodes built 😎"

