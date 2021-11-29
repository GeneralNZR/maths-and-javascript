module SommeConsecutive (sommeConsecutive) where

import Data.Bits ((.&.))

{-| Verifie si un nombre peut être exprimé en somme de deux ou plusieurs nombres entiers positifs consecutifs.

    Input: Int - Nombre à tester.

    Output: Bool - True si le nombre peut être exprimé en somme de deux ou plusieurs nombres entiers positifs consecutifs, False sinon.

    Exemple: sommeConsecutive(10) = True, car 10 = 1 + 9.
-}
sommeConsecutive :: Int -> Bool
sommeConsecutive n = (n .&. (n - 1)) /= 0

main :: IO ()
main = do
    mapM_
        (\n -> putStrLn $ "sommeConsecutive " ++ show n ++ " -> " ++ show (sommeConsecutive n))
        [1..15]
{-^ Output:
    sommeConsecutive 1  -> False
    sommeConsecutive 2  -> False
    sommeConsecutive 3  -> True -- 3 = 1 + 2
    sommeConsecutive 4  -> False
    sommeConsecutive 5  -> True -- 5 = 2 + 3
    sommeConsecutive 6  -> True -- 6 = 1 + 2 + 3
    sommeConsecutive 7  -> True -- 7 = 3 + 4
    sommeConsecutive 8  -> False 
    sommeConsecutive 9  -> True -- 9 = 4 + 5 = 2 + 3 + 4
    sommeConsecutive 10 -> True -- 10 = 1 + 2 + 3 + 4
    sommeConsecutive 11 -> True -- 11 = 5 + 6
    sommeConsecutive 12 -> True -- 12 = 3 + 4 + 5
    sommeConsecutive 13 -> True -- 13 = 6 + 7
    sommeConsecutive 14 -> True -- 14 = 2 + 3 + 4 + 5
    sommeConsecutive 15 -> True -- 15 = 7 + 8 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5
-}