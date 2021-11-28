def somme_chiffres(n: int) -> int:
    """
    Description:
        Fonction qui retourne la somme des chiffres d'un nombre.
    
    Paramètres:
        n: {int} -- Le nombre à traiter.
    
    Retourne:
        {int} -- La somme des chiffres du nombre.
    
    Exemple:
        >>> somme_chiffres(1010101)
        4
    """
    somme = 0
    while n > 0:
        somme += n % 10
        n //= 10
    return somme