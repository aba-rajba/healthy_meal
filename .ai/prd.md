# Dokument wymagań produktu (PRD) - HealthyMeal

## 1. Przegląd produktu

HealthyMeal to aplikacja webowa, której celem jest dostosowanie dostępnych w sieci przepisów kulinarnych do indywidualnych potrzeb oraz wymagań żywieniowych użytkownika. Dzięki integracji z AI, aplikacja dynamicznie generuje listę zamienników produktów wraz z przeredagowanym tekstem przepisu, co umożliwia spersonalizowaną modyfikację przepisów.

## 2. Problem użytkownika

Użytkownicy mają trudność w dostosowywaniu przepisów do swoich unikalnych preferencji żywieniowych i ograniczeń dietetycznych. Brak narzędzia, które automatycznie modyfikuje przepisy w oparciu o dane profilowe i dodatkowe kryteria, utrudnia im codzienne przygotowywanie zdrowych posiłków.

## 3. Wymagania funkcjonalne

1. Dynamiczne generowanie listy zamienników produktów w formie par "produkt" - "zamiennik" wraz z przeredagowanym tekstem przepisu.
2. Obowiązkowe uzupełnienie profilu użytkownika zawierającego preferencje żywieniowe przed użyciem funkcji modyfikacji przepisu.
3. Możliwość dodawania przepisu tekstowego (limit 3000 znaków) poprzez formularz.
4. Modyfikacja przepisu przez AI na podstawie danych z profilu oraz dodatkowych kryteriów – z możliwością akceptacji, odrzucenia lub doprecyzowania zmiany.
5. Standardowy system rejestracji oraz logowania z weryfikacją konta (e-mail i hasło).
6. Panel administracyjny prezentujący dane sukcesu (np. wypełnienie profilu przez 90% użytkowników oraz aktywność generowania przepisu przez 75% użytkowników).
7. Możliwość edycji i usuwania zapisanych przepisów przez użytkownika.

## 4. Granice produktu

1. Importowanie przepisów z adresu URL nie jest częścią MVP.
2. Brak wsparcia dla multimediów, takich jak zdjęcia przepisów.
3. Funkcje społecznościowe, takie jak udostępnianie przepisów innym użytkownikom, nie wchodzą w zakres MVP.
4. Zmiany dokonane w profilu użytkownika nie wpływają na wcześniej zapisane przepisy.

## 5. Historyjki użytkowników

- US-001: Rejestracja i weryfikacja konta

  - Tytuł: Rejestracja użytkownika i weryfikacja konta
  - Opis: Użytkownik rejestruje się podając adres e-mail i hasło, a następnie musi potwierdzić swoje konto poprzez link weryfikacyjny wysłany na e-mail.
  - Kryteria akceptacji:
    - Użytkownik może zarejestrować się za pomocą e-maila i hasła.
    - Użytkownik otrzymuje e-mail z linkiem weryfikacyjnym.
    - Konto użytkownika zostaje aktywowane po potwierdzeniu adresu e-mail.

- US-002: Uzupełnienie profilu z preferencjami żywieniowymi

  - Tytuł: Uzupełnienie profilu użytkownika
  - Opis: Po rejestracji, użytkownik musi uzupełnić profil informacjami o preferencjach żywieniowych, aby móc korzystać z funkcji modyfikacji przepisu.
  - Kryteria akceptacji:
    - Formularz profilu zawiera wszystkie wymagane pola dotyczące preferencji żywieniowych.
    - Funkcja modyfikacji przepisu jest zablokowana, dopóki profil nie zostanie uzupełniony.

- US-003: Dodanie przepisu

  - Tytuł: Dodanie przepisu tekstowego
  - Opis: Użytkownik wprowadza przepis za pomocą formularza tekstowego, limitowanego do 3000 znaków.
  - Kryteria akceptacji:
    - Formularz umożliwia wprowadzenie przepisu do 3000 znaków.
    - Przepis jest zapisywany i wyświetlany w historii przepisów użytkownika.

- US-004: Modyfikacja przepisu przez AI

  - Tytuł: Modyfikacja przepisu przez AI
  - Opis: Użytkownik inicjuje proces modyfikacji przepisu, który na podstawie danych z profilu oraz dodatkowych kryteriów przetwarzany jest przez AI. Po modyfikacji, użytkownik może zaakceptować zmiany, odrzucić je lub żądać dalszych poprawek.
  - Kryteria akceptacji:
    - AI generuje zmodyfikowany tekst przepisu oraz dynamiczną listę zamienników produktów.
    - Użytkownik ma możliwość wyboru jednej z opcji: akceptacja, odrzucenie lub doprecyzowanie zmian.

- US-005: Zarządzanie zapisanymi przepisami

  - Tytuł: Edycja i usuwanie zapisanych przepisów
  - Opis: Użytkownik zarządza swoimi zapisanymi przepisami, mając możliwość ich edycji oraz usuwania.
  - Kryteria akceptacji:
    - Użytkownik może edytować dowolnie wcześniej zapisane przepisy.
    - Użytkownik może usunąć przepis, który już nie jest potrzebny.

- US-006: Przegląd panelu administracyjnego
  - Tytuł: Wyświetlanie danych sukcesu produktu
  - Opis: Administrator ma dostęp do panelu administracyjnego, gdzie wyświetlane są kluczowe metryki sukcesu produktu, takie jak uzupełnienie profilu przez 90% użytkowników i generowanie przepisu przez 75% użytkowników.
  - Kryteria akceptacji:
    - Panel administracyjny automatycznie pobiera dane przy wejściu na widok.
    - Administrator ma możliwość ręcznego odświeżenia prezentowanych danych.

## 6. Metryki sukcesu

1. 90% użytkowników musi mieć uzupełniony profil z informacjami o preferencjach żywieniowych.
2. 75% użytkowników musi generować co najmniej jeden przepis tygodniowo.
3. Dane te są zapisywane w bazie danych oraz prezentowane w panelu administracyjnym, umożliwiając monitorowanie skuteczności produktu.
