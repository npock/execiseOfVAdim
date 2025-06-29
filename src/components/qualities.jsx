export const Qualities = ({ qualities }) => {
  return qualities.map((qual) => (
    <p key={qual._id} className={`itemQuality ${qual.color}`}>
      {qual.name}
    </p>
  ));
};
