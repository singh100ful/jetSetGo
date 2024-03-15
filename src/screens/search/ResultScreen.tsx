import {IconButtonAtom} from '@src/components/atoms/IconButtonAtom';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {FilterMolecule} from '@src/components/molecules/FilterMolecule';
import {HeaderMolecule} from '@src/components/molecules/HeaderMolecule';
import {ResultMolecule} from '@src/components/molecules/ResultMolecule';
import {CalendarOrganism} from '@src/components/organisms/CalendarOrganism';
import {ScreenOrganism} from '@src/components/organisms/ScreenOrganism';
import {baseUrl} from '@src/config/appConfig';
import {ColorPresets} from '@src/theme/colors';
import {Scale} from '@src/theme/metrics';
import * as React from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface SearchResultScreenProps {}

export const SearchResultScreen: React.FC<SearchResultScreenProps> = ({}) => {
  const [filter, setFilter] = React.useState(false);
  const [sort, setSort] = React.useState(false);
  const [initial, setInitial] = React.useState<ResponseData[]>([]);
  const [data, setData] = React.useState<ResponseData[]>([]);
  const [loading, setLoading] = React.useState(false);
  let sortOption: string[] = ['Lowest Price', 'Highest Price'];
  let filterOption: string[] = [];
  const handleSearch = async () => {
    setLoading(true);
    return fetch(baseUrl)
      .then(response => response.json())
      .then(result => {
        setInitial(result);
        setData(result);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (initial.length !== 0) {
    for (var i = 0; i < initial.length; i++) {
      filterOption.push(initial[i].airline);
    }

    filterOption = filterOption.filter((c, index) => {
      return filterOption.indexOf(c) === index;
    });
  }

  const handleFilter = (text: string) => {
    const newData: any = initial.filter((item: ResponseData) => {
      if (item !== null) {
        const title = item.airline.toUpperCase();

        const textData = text.toUpperCase();

        return title.indexOf(textData) > -1;
      }
    });
    setFilter(false);

    if (text === '') {
      setData(initial);
    } else {
      setData(newData);
    }
  };

  const handleSort = (text: string) => {
    setSort(false);
    if (text === 'Lowest Price') {
      const newData = data.sort((a, b) => a.price - b.price);
      setData(newData);
    } else {
      const newData = data.sort((a, b) => b.price - a.price);
      setData(newData);
    }
  };

  return (
    <ScreenOrganism paddingHorizontal={0} paddingTop={0}>
      <HeaderMolecule title="" />
      <FilterMolecule
        visible={filter}
        setVisible={setFilter}
        data={filterOption}
        title="Filter by airline"
        onSelect={data => handleFilter(data)}
      />
      <FilterMolecule
        visible={sort}
        setVisible={setSort}
        data={sortOption}
        title="Sort by"
        onSelect={data => handleSort(data)}
      />
      <View style={styles.searchContainer}>
        <View style={{flex: 1}}>
          <CalendarOrganism />
        </View>
        <IconButtonAtom
          onPress={handleSearch}
          loading={loading}
          icon="search"
        />
      </View>
      <View
        style={{
          backgroundColor: ColorPresets.white,
        }}>
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={data}
          renderItem={({item}) => <ResultMolecule item={item} />}
        />
      </View>
      <View style={styles.filterContainer}>
        <Pressable onPress={() => setSort(true)} style={styles.filterButton}>
          <Icon name="filter" size={Scale.base} color={ColorPresets.white} />
          <TextAtom text="Sort" style={{color: ColorPresets.white}} />
        </Pressable>
        <Pressable onPress={() => setFilter(true)} style={styles.filterButton}>
          <Icon name="funnel" size={Scale.base} color={ColorPresets.white} />
          <TextAtom text="Filter" style={{color: ColorPresets.white}} />
        </Pressable>
      </View>
    </ScreenOrganism>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: ColorPresets.primaryCTA,
  },
  listContainer: {
    paddingVertical: Scale.xl,
    paddingBottom: Scale.xxl,
    paddingHorizontal: Scale.base,
    gap: Scale.base,
  },
  filterContainer: {
    position: 'absolute',
    bottom: Scale.base,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Scale.base,
  },
  filterButton: {
    backgroundColor: ColorPresets.primaryCTA,
    paddingVertical: Scale.md,
    paddingHorizontal: Scale.base,
    borderRadius: Scale.base,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Scale.md,
  },
});
