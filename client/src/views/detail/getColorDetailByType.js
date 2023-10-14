const getColorDetailByType = (type) => {
  switch (type) {
    case 'bug':
        return "#329339"
    case 'dark':
        return "#312D84"
    case 'dragon':
        return "#D9D43A"
    case 'electric':
        return "#FFCC01"
    case 'fairy':
        return "#FED8FF"
    case 'fighting':
        return "#FFFECC"
    case 'fire':
        return "#A54A5A"
    case 'flying':
        return "#A54A5A"
    case 'ghost':
        return "#0D1C42"
    case 'grass':
        return "#4C9F0C"
    case 'ground':
        return "#E8C088"
    case 'ice':
        return "#196F98"
    case 'normal':
        return "#E4DBAF"
    case 'poison':
        return "#432D7C"
    case 'psychic':
        return "#C232DD"
    case 'rock':
        return "#B8ADA6"
    case 'steel':
        return "#55889E"
    case 'water':
        return "#62AFDE"
    default:
        return "transparent"
    }
}

export default getColorDetailByType