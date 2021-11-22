module DivisionParDeux (divisionParDeux) where

import Data.Bits (shiftR)
{-| Fonction qui divise un nombre par deux, grâce à 
    l'opérateur de décalage binaire à droite (shiftR).

    Input:  Int - Nombre à diviser par deux

    Output: Int - Nombre divisé par deux
-}
divisionParDeux :: Int -> Int
divisionParDeux x = shiftR x 1

-- TEST
main :: IO ()
main = print $ divisionParDeux 10 
-- ^Output: 5
