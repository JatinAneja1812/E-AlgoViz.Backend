export default function visualizerSpeedValue(speed_Type) {

  switch (speed_Type) {
    case "Fastest":
      return 1;
    case "Fast":
      return 10;
    case "Medium":
      return 30;
    case "Slow":
      return 40;
    default:
      return 5;
  }
}
