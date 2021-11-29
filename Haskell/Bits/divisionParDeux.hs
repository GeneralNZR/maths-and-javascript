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
main = do
    mapM_
        (\x -> putStrLn $ "divisionParDeux " ++ show x ++ " -> " ++ show (divisionParDeux x))
        [x*2 | x <- [1..10]]
{-^ Output:
    divisionParDeux 2  = 1
    divisionParDeux 4  = 2
    divisionParDeux 6  = 3
    divisionParDeux 8  = 4
    divisionParDeux 10 = 5
    divisionParDeux 12 = 6
    divisionParDeux 14 = 7
    divisionParDeux 16 = 8
    divisionParDeux 18 = 9
    divisionParDeux 20 = 10
-}