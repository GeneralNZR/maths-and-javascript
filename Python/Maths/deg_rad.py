from math import pi

def deg_en_rad(deg: float) -> float:
    """
    Description:
        Fonction qui permet de passer de degrés en radians.
    
    Paramètres:
        deg: {float} -- Degrés à convertir.
    
    Retourne:
        {float} -- Radians.
    
    Exemple:
        >>> degEnRad(90)
        1.5707963267948966
    """
    return deg * (pi / 180)

def rad_en_Deg(rad: float) -> float:
    """
    Description:
        Fonction qui permet de passer de radians en degrés.
    
    Paramètres:
        rad: {float} -- Radians à convertir.
    
    Retourne:
        {float} -- Degrés.
    
    Exemple:
        >>> radEnDeg(1.5707963267948966)
        90.0
    """
    return rad * (180 / pi)