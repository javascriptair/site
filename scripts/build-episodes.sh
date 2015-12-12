for D in `find episodes -depth 1 -type d`
do
  ./scripts/build-episode.sh $D
done

