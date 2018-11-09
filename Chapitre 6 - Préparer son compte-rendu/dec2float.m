
function [ bitSign, bitExposant, bitMantisse ] = dec2float(realToConvert)
%
%   DEC2FLOAT convertit un reel en son equivalent flottant sur 32 bits (single)
%
%   dec2float(realToConvert) convertit realToConvert en son equivalent flottant sur 32 bits (single)
%
%   * Entree :
%       -> realToConvert - single - Reel a transformer en flottant
%
%   * Sortie :
%       -> bitSign - [char] - Bit representant le signe du flottant
%       -> bitExposant - [char] - Bits representant la valeur de l exposant du flottant
%       -> bitMantisse - [char] - Bits representant la valeur de la mantisse du flottant