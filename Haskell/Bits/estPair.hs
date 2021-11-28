module EstPair (estPair) where

import Data.Bits (shiftL, shiftR, (.&.), (.|.))

estPair :: Int -> Bool
estPair x = x .&. 1 == 0

-- TEST
main :: IO ()
main = do
    mapM_
        (\x -> putStrLn $ "estPair " ++ show x ++ " -> " ++ show (estPair x))
        [1..10]
{-^ Output:
    estPair 1 -> False
    estPair 2 -> True
    estPair 3 -> False
    estPair 4 -> True
    estPair 5 -> False
    estPair 6 -> True
    estPair 7 -> False
    estPair 8 -> True
    estPair 9 -> False
    estPair 10 -> True
-}