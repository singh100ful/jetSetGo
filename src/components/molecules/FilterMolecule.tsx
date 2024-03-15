import {ColorPresets} from '@src/theme/colors';
import {Scale} from '@src/theme/metrics';
import * as React from 'react';
import {Modal, Pressable, ScrollView, Text, View} from 'react-native';
import {SeparatorAtom} from '../atoms/SeparatorAtom';
import {TextAtom} from '../atoms/TextAtom';

interface FilterMoleculeProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  title: string;
  data: string[];
  onSelect(arg: string): void;
}

export const FilterMolecule: React.FC<FilterMoleculeProps> = ({
  visible,
  setVisible,
  title,
  data,
  onSelect,
}) => {
  return (
    <Modal animationType="slide" visible={visible} transparent>
      <Pressable
        style={{
          flex: 2,
          backgroundColor: ColorPresets.primaryTextOpacity,
        }}
        onPress={() => setVisible(false)}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: ColorPresets.primaryTextOpacity,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: ColorPresets.white,
            borderTopLeftRadius: Scale.base,
            borderTopRightRadius: Scale.base,
            paddingTop: Scale.base,
            paddingHorizontal: Scale.base,
          }}>
          <TextAtom text={title} preset="heading" />
          <SeparatorAtom />
          <ScrollView
            contentContainerStyle={{gap: Scale.base, paddingTop: Scale.base}}>
            {data.map((item, index) => {
              return (
                <Pressable onPress={() => onSelect(item)} key={index}>
                  <TextAtom text={item} style={{color: ColorPresets.gray}} />
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
