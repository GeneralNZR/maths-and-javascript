module MultiplicationParDeux (multiplicationParDeux) where

import Data.Bits (shiftL)
{-| Fonction qui multiplie un nombre par deux, grâce à 
    l'opérateur de décalage binaire à gauche (shiftL).

    Input:  Int - Nombre à multiplier par deux

    Output: Int - Nombre multiplié par deux
-}
multiplicationParDeux :: Int -> Int
multiplicationParDeux x = shiftL x 1

-- TEST
main :: IO ()
main = do
    mapM_
        (\x -> putStrLn $ "multiplicationParDeux " ++ show x ++ " -> " ++ show (multiplicationParDeux x))
        [x*2 | x <- [1..10]]
{-^ Output:
    multiplicationParDeux 2  -> 4
    multiplicationParDeux 4  -> 8
    multiplicationParDeux 6  -> 12
    multiplicationParDeux 8  -> 16
    multiplicationParDeux 10 -> 20
    multiplicationParDeux 12 -> 24
    multiplicationParDeux 14 -> 28
    multiplicationParDeux 16 -> 32
    multiplicationParDeux 18 -> 36
    multiplicationParDeux 20 -> 40
-}