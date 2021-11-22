/**
 * @file divisionParDeux.cxx
 * @author Noam Zeitoun
 * @brief Fonction qui divise un nombre par deux, grace à l'opérateur de décalage binaire à droite (>>).
 * @date 16/11/2021
 */ 
#include <iostream>
/**
 * @param n Nombre à diviser par deux.
 * @return int - Nombre divisé par deux.
 */
void divisionParDeux(int n)

{
    std::cout << n << " >> 1 = " << (n >> 1) << std::endl;
}

int main()
{
    divisionParDeux(10);
    return 0;
}
// Output: 10 >> 1 = 5