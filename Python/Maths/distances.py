from math import atan2, cos, radians, sin, sqrt
"""
Description:
    Différentes fonctions de calcul de distances utiles.

Auteur:
    Noam Zeitoun

Version:
    1.0
"""

def distance_euclidienne(x1: float, y1: float, x2: float, y2: float) -> float:
    """
    Description:
        Calcule la distance euclidienne entre deux points.
    
    Paramètres:
        x1: {float} -- Abscisse du premier point.
        y1: {float} -- Ordonnée du premier point.
        x2: {float} -- Abscisse du second point.
        y2: {float} -- Ordonnée du second point.
    
    Retourne:
        {float} -- Distance euclidienne entre les deux points.
    
    Exemple:
        >>> distance_euclidienne(0, 0, 1, 1)
        1.4142135623730951
    """
    width = x2 - x1
    height = y2 - y1
    return sqrt(width**2 + height**2)

def distance_manhattan(x1: float, y1: float, x2: float, y2: float) -> float:
    """
    Description:
        Calcule la distance manhattan entre deux points.
    
    Paramètres:
        x1: {float} -- Abscisse du premier point.
        y1: {float} -- Ordonnée du premier point.
        x2: {float} -- Abscisse du second point.
        y2: {float} -- Ordonnée du second point.
    
    Retourne:
        {float} -- Distance manhattan entre les deux points.
    
    Exemple:
        >>> distance_manhattan(0, 0, 1, 1)
        2.0
    """
    width = x2 - x1
    height = y2 - y1
    return abs(width) + abs(height)

def distance_minkowski(x1: float, y1: float, x2: float, y2: float, p: float) -> float:
    """
    Description:
        Calcule la distance Minkowski entre deux points.
    
    Paramètres:
        x1: {float} -- Abscisse du premier point.
        y1: {float} -- Ordonnée du premier point.
        x2: {float} -- Abscisse du second point.
        y2: {float} -- Ordonnée du second point.
        p: {float} -- Paramètre de la fonction Minkowski.
    
    Retourne:
        {float} -- Distance Minkowski entre les deux points.
    
    Exemple:
        >>> distance_minkowski(0, 0, 1, 1, 1)
        2.0
    """
    width = x2 - x1
    height = y2 - y1
    return (abs(width)**p + abs(height)**p)**(1/p)

def distance_tchebychev(x1: float, y1: float, x2: float, y2: float) -> float:
    """
    Description:
        Calcule la distance Tchebychev entre deux points.
    
    Paramètres:
        x1: {float} -- Abscisse du premier point.
        y1: {float} -- Ordonnée du premier point.
        x2: {float} -- Abscisse du second point.
        y2: {float} -- Ordonnée du second point.
    
    Retourne:
        {float} -- Distance Tchebychev entre les deux points.
    
    Exemple:
        >>> distance_tchebychev(0, 0, 1, 1)
        1.0
    """
    width = x2 - x1
    height = y2 - y1
    return max(abs(width), abs(height))

def distance_hamming(str1: str, str2: str) -> int:
    """
    Description:
        Calcule la distance Hamming entre deux chaînes de caractères.
    
    Paramètres:
        str1: {str} -- Première chaîne de caractères.
        str2: {str} -- Deuxième chaîne de caractères.
    
    Retourne:
        {int} -- Distance Hamming entre les deux chaînes de caractères.
    
    Exemple:
        >>> distance_hamming("000", "101")
        2
    """
    return sum(1 for i in range(len(str1)) if str1[i] != str2[i])

def distance_jaccard(arr1: list, arr2: list) -> float:
    """
    Description:
        Calcule la distance Jaccard entre deux listes.
    
    Paramètres:
        arr1: {list} -- Première liste.
        arr2: {list} -- Deuxième liste.
    
    Retourne:
        {float} -- Distance Jaccard entre les deux listes.
    
    Exemple:
        >>> distance_jaccard([0, 0, 0], [1, 0, 1])
        0.5
    """
    union = set(arr1) | set(arr2)
    intersection = set(arr1) & set(arr2)
    return 1 - len(intersection) / len(union)

def distance_sorensen_dice(arr1: list, arr2: list) -> float:
    """
    Description:
        Calcule la distance Sorensen-Dice entre deux listes.
    
    Paramètres:
        arr1: {list} -- Première liste.
        arr2: {list} -- Deuxième liste.
    
    Retourne:
        {float} -- Distance Sorensen-Dice entre les deux listes.
    
    Exemple:
        >>> distance_sorensen_dice([0, 0, 0], [1, 0, 1])
        1
    """
    union = set(arr1) | set(arr2)
    intersection = set(arr1) & set(arr2)
    return 2 * len(intersection) / len(union)

def distance_levenshtein(str1: str, str2: str) -> int:
    """
    Description:
        Calcule la distance Levenshtein entre deux chaînes de caractères.
    
    Paramètres:
        str1: {str} -- Première chaîne de caractères.
        str2: {str} -- Deuxième chaîne de caractères.
    
    Retourne:
        {int} -- Distance Levenshtein entre les deux chaînes de caractères.
    
    Exemple:
        >>> distance_levenshtein("000", "101")
        2
    """
    if len(str1) < len(str2):
        return distance_levenshtein(str2, str1)
    if len(str2) == 0:
        return len(str1)
    previous_row = range(len(str2) + 1)
    for i, c1 in enumerate(str1):
        current_row = [i + 1]
        for j, c2 in enumerate(str2):
            insertions = previous_row[j + 1] + 1
            deletions = current_row[j] + 1
            substitutions = previous_row[j] + (c1 != c2)
            current_row.append(min(insertions, deletions, substitutions))
        previous_row = current_row
    return previous_row[-1]

def formule_haversine(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """
    Description:
        Calcule la distance entre deux points par la formule de Haversine.
    
    Paramètres:
        lat1: {float} -- Latitude du premier point.
        lon1: {float} -- Longitude du premier point.
        lat2: {float} -- Latitude du second point.
        lon2: {float} -- Longitude du second point.
    
    Retourne:
        {float} -- Distance entre les deux points.
    
    Exemple:
        >>> formule_haversine(0, 0, 1, 1)
        157.24938127194397
    """
    EARTH_RADIUS = 6371e3
    dLat = radians(lat2 - lat1)
    dLon = radians(lon2 - lon1)
    lat1 = radians(lat1)
    lat2 = radians(lat2)
    a = sin(dLat/2)**2 + cos(lat1) * cos(lat2) * sin(dLon/2)**2
    c = 2 * atan2(sqrt(a), sqrt(1-a))
    return (EARTH_RADIUS * c) / 1000

# TESTS
print(
    'distance_euclidienne(0, 0, 1, 1)'+' ---------------------> ', distance_euclidienne(0, 0, 1, 1),
    '\ndistance_manhattan(0, 0, 1, 1)'+' -----------------------> ', distance_manhattan(0, 0, 1, 1),
    '\ndistance_tchebychev(0, 0, 1, 1)'+' ----------------------> ', distance_tchebychev(0, 0, 1, 1),
    '\ndistance_hamming("000", "101")'+' -----------------------> ', distance_hamming("000", "101"),
    '\ndistance_jaccard([0, 0, 0], [1, 0, 1])'+' ---------------> ', distance_jaccard([0, 0, 0], [1, 0, 1]),
    '\ndistance_sorensen_dice([0, 0, 0], [1, 0, 1])'+' ---------> ', distance_sorensen_dice([0, 0, 0], [1, 0, 1]), 
    '\ndistance_levenshtein("000", "101")'+' -------------------> ', distance_levenshtein("000", "101"), 
    '\nformule_haversine(0, 0, 1, 1)'+' ------------------------> ', formule_haversine(0, 0, 1, 1)
)