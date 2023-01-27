function formatBRLForHubspot(n) {
    const sanitizedNumber = parseFloat(n.replace(/[.,]/g, '')).toFixed(2).replace(/\./g, ',')
    return sanitizedNumber;
}

