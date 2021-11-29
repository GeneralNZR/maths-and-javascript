module PuissanceDeDeux (puissanceDeDeux) where

import Data.Bits ((.&.))

{-| Vérifie si un nombre est une puissance de deux.

    On prend un nombre entier n, on vérifie si n & (n - 1) est égal à 0.
    Si c'est le cas, alors n est un nombre de puissance de deux.
    00000000000000000000000000001000 = 8
    00000000000000000000000000000111 = 7
    8 & (8 - 1) = 0, donc 8 est un nombre de puissance de deux.

    Input: Int - Nombre à vérifier.

    Output: Bool - True si le nombre est une puissance de deux, False sinon.
-}
puissanceDeDeux :: Int -> Bool
puissanceDeDeux n = n .&. (n - 1) == 0

-- TEST
main :: IO ()
main = do
    mapM_
        (\n -> putStrLn $ "puissanceDeDeux " ++ show n ++ " -> " ++ show (puissanceDeDeux n))
        [1..10]
{-^ Output:
    puissanceDeDeux 1  -> True
    puissanceDeDeux 2  -> True
    puissanceDeDeux 3  -> False
    puissanceDeDeux 4  -> True
    puissanceDeDeux 5  -> False
    puissanceDeDeux 6  -> False
    puissanceDeDeux 7  -> False
    puissanceDeDeux 8  -> True
    puissanceDeDeux 9  -> False
    puissanceDeDeux 10 -> False
-}