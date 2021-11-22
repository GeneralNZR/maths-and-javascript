module EstPair (estPair) where

import Data.Bits (shiftL, shiftR, (.&.), (.|.))

estPair :: Int -> Bool
estPair x = x .&. 1 == 0

-- TEST
main :: IO ()
main = do
    mapM_
        (\x -> putStrLn $ show x ++ " -> " ++ show (estPair x))
        [1..10]
{-^ Output:
    1  -> False
    2  -> True
    3  -> False
    4  -> True
    5  -> False
    6  -> True
    7  -> False
    8  -> True
    9  -> False
    10 -> True
-}