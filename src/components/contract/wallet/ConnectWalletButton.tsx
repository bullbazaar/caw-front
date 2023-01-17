import { Button, Image, Box, VStack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { useDappProvider } from 'src/context/DAppConnectContext'

const ConnectWalletButton = () => {

  const { chain, status, openChainModal, openConnectModal } = useDappProvider();
  const { t } = useTranslation();

  if (status === 'disconnected') {
    return (
      <VStack>
        <Text as="b">
          {t('wallet.notConnected')}
        </Text>
        <Text
          cursor={'pointer'}
          onClick={() => openConnectModal}
        >
          {t('wallet.signIn')}
        </Text>
      </VStack>
    );
  }

  if (status === 'connecting' || status === 'reconnecting') {
    return (
      <Button
        variant="ghost"
        onClick={openConnectModal}
      >
        {t('wallet.awating_cnn')}
      </Button>
    );
  }

  if (!chain || chain?.unsupported) {
    return (
      <Button
        variant="ghost"        
        onClick={openChainModal}
      >
        {t('buttons.btn_wrong_network')}
      </Button>
    );
  }

  return (
    <Box >
      <VStack>
        <Button
          onClick={chain?.name ? openChainModal : openConnectModal}
          variant="ghost"
          bgGradient="linear(to-l, brand.100, brand.200)"
        >
          {chain?.hasIcon && (
            <Box
              style={{
                background: chain?.iconBackground,
                width: 12,
                height: 12,
                borderRadius: 999,
                overflow: "hidden",
                marginRight: 4,
              }}
            >
              {chain?.iconUrl && (
                <Image
                  alt={chain.name ?? "Chain icon"}
                  src={chain.iconUrl}
                  style={{ width: 12, height: 12 }}
                />
              )}
            </Box>
          )}
          {chain?.name || t('labels.unknownChain')}
        </Button>
      </VStack>
    </Box>
  );
};

export default ConnectWalletButton;
