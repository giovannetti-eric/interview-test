import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Users } from '../types/usersType';

// todo: move into a .env file
const API_URL = 'http://localhost:8099';
const swrOptions = { revalidateOnFocus: false };

export function useKids(): {
  kids: Users;
  isLoading: boolean;
  error: any;
} {
  const { data, error } = useSWR(`${API_URL}/users/kids`, apiFetcher, swrOptions);

  return {
    kids: data,
    isLoading: !error && !data,
    error,
  };
}

export function useAdults(): {
  adults: Users;
  isLoading: boolean;
  error: any;
} {
  const { data, error } = useSWR(`${API_URL}/users/adults`, apiFetcher, swrOptions);

  return {
    adults: data,
    isLoading: !error && !data,
    error,
  };
}

export function useSeniors(): {
  seniors: Users;
  isLoading: boolean;
  error: any;
} {
  const { data, error } = useSWR(`${API_URL}/users/seniors`, apiFetcher, swrOptions);

  return {
    seniors: data,
    isLoading: !error && !data,
    error,
  };
}

export function useUsers(): {
  users: Users;
  isLoading: boolean;
  isError: any;
} {
  const { kids, isLoading: isKidsLoading, error: kidsError } = useKids();
  const { adults, isLoading: isAdultsLoading, error: adultsError } = useAdults();
  const { seniors, isLoading: isSeniorLoading, error: seniorsError } = useSeniors();

  const [users, setUsers] = useState<Users>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (kidsError || adultsError || seniorsError) {
      // todo: push error to an real error handler
      setIsError(true);
      console.error({ kidsError, adultsError, seniorsError });
    }
  }, [kidsError, adultsError, seniorsError]);

  useEffect(() => {
    if (!isError && !isKidsLoading && !isAdultsLoading && !isSeniorLoading) {
      setIsLoading(false);
    }
  }, [isError, isKidsLoading, isAdultsLoading, isSeniorLoading]);

  useEffect(() => {
    if (!isLoading) {
      setUsers([...kids, ...adults, ...seniors]);
    }
  }, [isLoading, kids, adults, seniors]);

  return {
    users,
    isLoading,
    isError,
  };
}

const apiFetcher = (url) =>
  fetch(url).then(async (result) => {
    const json = await result.json();
    return json?.data || json;
  });
