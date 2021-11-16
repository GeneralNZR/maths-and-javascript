def entierEnBinaire(n: int) -> str:
    """
    Description:
        Convertit un entier en binaire. Pour gérer les nombres négatifs, on ajoute 2**32 (ou 1<<32).

    Paramètres:
        n: {int} -- L'entier à convertir.

    Retourne:
        {str} -- Lé nombre converti en binaire.

    Exemple:
        >>> entierEnBinaire(5)
        00000000000000000000000000000101

        >>> entierEnBinaire(-5)
        11111111111111111111111111110111    
    """
    return bin(n + (1<<32))[3:]
