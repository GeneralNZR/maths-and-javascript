def entier_en_binaire(n: int) -> str:
    """
    Description:
        Convertit un entier en binaire. Pour gérer les nombres négatifs, on ajoute 2**32 (ou 1<<32).

    Paramètres:
        n: {int} -- L'entier à convertir.

    Retourne:
        {str} -- Lé nombre converti en binaire.

    Exemple:
        >>> entier_en_binaire(5)
        00000000000000000000000000000101

        >>> entier_en_binaire(-5)
        11111111111111111111111111110111    
    """
    return bin(n + (1<<32))[3:]
